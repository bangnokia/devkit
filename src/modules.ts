export interface Module {
    name: string;
    slug: string;
    icon?: string;
}

const modules: Module[] =  [
    {
        name: 'Json formatter',
        slug: '/json-formatter',
    }
]

export default modules;
