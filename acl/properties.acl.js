module.exports = {
    get: {
        access: ['aggregate_user'],
        fields: {
            restricted: {
                aggregate_user: ['Volume_Num', 'Folio_Num', 'Ownership']
            }
        }
    }
};
