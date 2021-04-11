import { FaWineGlassAlt as icon } from 'react-icons/fa';

export default {
    name: 'ingredientCategory',
    title: 'Ingredient Category',
    type: 'document',
    icon,
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'category',
                maxLength: 100,
            },
        },
    ],
};
