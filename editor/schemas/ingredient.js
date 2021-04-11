import { FaGlassMartiniAlt as icon } from 'react-icons/fa';

export default {
    name: 'ingredient',
    title: 'Ingredient',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'ingredientCategory' }],
        },
    ],
};
