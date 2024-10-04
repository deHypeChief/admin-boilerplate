import Elysia from "elysia";
import Admin from "../model";

import { createAdminModel } from '../setup'

const createAdmin = new Elysia()
    .use(createAdminModel)
    .post('/createAdmin', async ({ body, set }) => {
        const { adminName, adminEmail, pin, adminRole } = body

        try {
            const existingAdminByEmail = await Admin.findOne({ adminEmail });
            if (existingAdminByEmail) {
                set.status = 400;
                return { message: 'Admin with this mail already exists' };
            }
            const admin = new Admin({ adminName, pin, adminRole, adminEmail, socialAuth: false });
            await admin.save();

            set.status = 201;
            return {
                message: 'Admin registered successfully',
                data: {
                    admin: {
                        _id: admin._id,
                        name: admin.adminName,
                        role: admin.adminRole,
                        email: admin.adminEmail,
                    },
                    auth: {
                        message: 'Sign In to access dashboard',
                    },
                },
            };
        } catch (err) {
            set.status = 500;
            return { message: 'Internal Server Error'};
        }
    }, {
        body: 'createAdminModel'
    })

export default createAdmin