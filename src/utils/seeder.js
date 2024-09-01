import { faker } from '@faker-js/faker';

export function studentSeeder(count = 1) {
    const data = [];

    for (count; count > 0; count--) {
        data.push({
            firstName: faker.person.firstName(),
            middleName: faker.person.middleName(),
            lastName: faker.person.lastName(),
            studentId: faker.string.alphanumeric({ length: 10 }),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            contactNumber: faker.phone.number(),
            currentAddress: faker.location.city(),
            birthdate: faker.date.birthdate(),
            gender: faker.person.gender()
        });
    }

    return data;
}