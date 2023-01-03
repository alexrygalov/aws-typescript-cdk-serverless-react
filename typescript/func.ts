interface Person {
    firstName: string,
    lastName: string,
}

function generateEmail(input: Person): string{
    return (`${input.firstName}.${input.lastName}@email.com`)
}

console.log(generateEmail({
    firstName: 'John',
    lastName: 'Doe'
}));