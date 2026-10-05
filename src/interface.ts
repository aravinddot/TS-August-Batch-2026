

interface tool {
    readonly name: string,
    age: number,
    language?: string
}



const automation: tool = {
    name: 'playwright',
    age: 6
}

//automation.name = 'cypress' // Error: Cannot assign to 'name' because it is a read-only property.