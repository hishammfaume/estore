import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    auth:{
        verify: {
            generateEmailHTML: ({token}) => {
                return `
                    <div>
                        <p>Click the link below to verify your email address.</p>
                       <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}">Verify Account</a> 
                    </div>
                `;
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,
        //update: () => true,
    },
    fields: [
        {
            name: 'role',
            defaultValue: 'user',
            required: true,
            admin: {
                condition: () => true
            },
            type: 'select',
            options: [
                {label: 'Admin', value: 'admin'},
                {label: 'User', value: 'user'}
            ]
        }
    ]
}