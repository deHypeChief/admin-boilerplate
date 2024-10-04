import Elysia from "elysia";
import Admin from "../model";

import { jwtAdmin } from "../../../middleware/jwt";
import { loginAdminModel } from "../setup";

const signAdmin = new Elysia()
    .use(loginAdminModel)
    .use(jwtAdmin)
    .post('/signAdmin', async ({ body, set, adminJwt }) => {
        const { adminEmail, pin } = body;

        try {
            const admin = await Admin.findOne({ adminEmail });
            if (!admin || !(await admin.comparePin(pin))) {
                set.status = 400;
                return 'Invalid credentials';
            }

            // Sign the JWT token
            const token = await adminJwt.sign({
                adminId: admin._id.toString(),
                adminEmail: admin.adminEmail,
            });

            return {
                message: 'Login successful',
                data: {
                    admin: {
                        _id: admin._id,
                        name: admin.adminName,
                        role: admin.adminRole,
                        email: admin.adminEmail,
                    },
                    auth: {
                        token: token,
                    },
                },
            };
        } catch (err) {
            set.status = 500;
            return 'Internal Server Error';
        }
    }, {
        body: 'loginAdminModel'
    })

export default signAdmin