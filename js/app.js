(function () 
{
    var app = angular.module('store', []);

    app.controller('StoreController', function () 
    {
        this.products = gems;
    });

    var gems = 
    [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'This the best product',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal',
            price: 1.5,
            description: 'This the beatyful product',
            canPurchase: true,
            soldOut: true
        },
        
    ];
})();