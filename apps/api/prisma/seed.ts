import {PrismaClient} from "./generated/client";
const prisma = new PrismaClient();

async function main() {
    // const result = await prisma.ingredient.createMany({
    //     skipDuplicates: true,
    //     data          : [
    //         ...parsedAdditives,
    //         ...ingredients
    //     ].map((additiveItem) => {
    //         const additive = additiveItem.data;
    //         return {
    //             code         : additive.code,
    //             name         : additive.name,
    //             synonyms     : additive.synonyms.split(', '),
    //             danger       : +additive.danger,
    //             origins      : additive.origin,
    //             categories   : additive.categories,
    //             description  : additive.description,
    //             healthHarm   : additive.health_harm,
    //             healthBenefit: additive.health_benefit,
    //             usage        : additive.usage,
    //             legislation  : additive.legislation,
    //             referenceUrl : additiveItem.reference_url,
    //         }
    //     })
    // });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })