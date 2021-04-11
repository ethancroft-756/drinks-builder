import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'cmdmlsod',
    dataset: 'production',
    useCdn: true,
});
