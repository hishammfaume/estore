export const PRODUCT_CATEGORIES = [
    {
        label: "Shoes",
        value: "shoes" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: '/nav/shoes/mixed.png'
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: '/nav/shoes/NIKE+C1TY+(GS).png'
            },
            {
                name: "Most popular",
                href: "#",
                imageSrc: '/nav/shoes/W+NIKE+AL8.png'
            }
        ]
    },
    {
        label: "Clothes",
        value: "clothes" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: '/nav/clothes/jacket.png'
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: '/nav/clothes/sweater.png'
            },
            {
                name: "Most popular",
                href: "#",
                imageSrc: '/nav/clothes/trsck.png'
            }
        ]
    }
]