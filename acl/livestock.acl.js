module.exports = {
    get: {
        access: ['aggregate_user'],
        fields: {
            restricted: {
                aggregate_user: ['IDX_Livestock', 'Property_Address']
            }
        }
    }
};
