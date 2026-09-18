export async function load({ fetch })    { 
    // fetch is van sveltekit zelf, zodat het verzoek niet dubbel wordt gedaan. 
    // je filtert als het ware wat je nodig hebt uit alles wat je ophaalt.

    const res = await fetch(`https://fdnd.directus.app/items/person/267`);
    const data = await res.json();

    return {
        person: data.data
    };
}
