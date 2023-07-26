const data = [
    {
        description: "A milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. If you don't drink dairy milk, you can easily swap it for a plant-based alternative like soy, oat or coconut milk.",
        id: "1",
        image: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
        ingredients: [
            "2 Cups of Milk", 
            "1 and 1/3 of Espresso Coffee"
        ],
        name: "Latte",
        price: 7.99,
    },
    {
        description: "A cappuccino is the perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds.",
        id: "2",
        image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        ingredients: [
            "2 tablespoons finely ground dark roast coffee",
            "4 ounces water",
            "4 ounces milk"
        ],
        name: "Cappuccino",
        price: 8.99
    },
    {
        description: "Chai tea, a spiced, sweet and unique blend originating in India. This spicy, vibrant tea blend usually contains a mix of black tea with cardamom, cloves, ginger and cinnamon, and it's not uncommon for vanilla and star anise to be added.",
        id: "3",
        image: "https://images.unsplash.com/photo-1519532059956-a63a37af5deb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        ingredients: [ 
            "You can adapt it as you please, make you own with these:",
            "Milk",
            "Green cardamon pops",
            "Black peppercorn",
            "Cloves",
            "Ginger", 
            "Cinnamon sticks",
            "Cane Sugar", 
            "(Optional) Fennel Seeds"
        ],
        name: "Chai",
        price: 5.99
    },
    {
        description: "Black coffee is simply coffee with nothing added – no cream, no milk, no sweetener.",
        id: "4",
        image: "https://images.unsplash.com/photo-1626881503617-34b52868cd7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
        ingredients: [
            "1 Cup of water",
            "1/2 tablespoon of your favorite coffee",
        ],
        name: "Black Coffee",
        price: 4.99
    },
    {
        description: "Caffè Americano. Is a type of coffee drink prepared by diluting an espresso with hot water , giving it a different flavor from traditionally brewed coffee.",
        id: "5",
        image: "https://images.unsplash.com/photo-1593412323862-f2ade7ea195e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        ingredients: [
            "2 ounces (2 shots) espresso",
            "4 ounces hot water",
        ],
        name: "Americano",
        price: 8.99
    },
    {
        description: "Espresso is not a type of coffee bean or a roasting style – a common misconception. It's a process of brewing coffee and is instead made by forcing high-pressured hot water through very finely ground coffee beans. This is then topped with a crema, a brown foam, that adds the rich, full-flavoured aftertaste.",
        id: "6",
        image: "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        ingredients: [
            "1/2 cup ground coffee (any dark coffee is prefered)",
            "1-1/2 cups cold water",
            "(Optional) Lemon twists"
        ],
        name: "Espresso",
        price: 7.99
    }, 
    {
        description: "Doppio is Italian multiplier, meaning \"double\". Is a double shot which is extracted using double the amount of ground coffee in a larger-sized portafilter basket.",
        id: "7",
        image: "https://images.unsplash.com/photo-1549723392-cf65fcbc3972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        ingredients: [
            "16 grams of ground coffee (Or double de amount of a espresso)"
        ],
        name: "Doppio",
        price: 5.99
    },
    {   
        description: "In Italian, the term “macchiato” translates as “marked” or “stained”, meaning a stained or marked coffee. The macchiato is an espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through.",
        id: "8",
        image: "https://images.unsplash.com/photo-1556216708-8cfd9746d773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        ingredients: [
            "2 espresso shots (2 ounces)",
            "2 ounces (¼ cup) whole milk foam*"
        ],
        name: "Macchiato",
        price: 6.99
    },
    {   
        description: "The basis is that a shot of espresso is combined with chocolate powder or syrup, followed by milk or cream. It is a variant of a Latte",
        id: "9",
        image: "https://plus.unsplash.com/premium_photo-1663853490794-abce4ea7e3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        ingredients:[
            "1 cup hot brewed coffee",
            "1 tablespoon unsweetened cocoa powder",
            "1 tablespoon white sugar", 
            "2 tablespoons milk"
        ],   
        name: "Mocha",
        price: 10.99
    },
    {
        description:"Ristretto means “restricted” in Italian. In the context of coffee, ristretto refers to a short (restricted) shot of espresso",
        id: "10",
        image: "https://images.unsplash.com/photo-1680079526233-8e252b3e95e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        ingredients: [
            "9 grams of roast espresso coffee",
            "15-20 ml of Ristretto"
        ],
        name: "Ristretto",
        price: "7.99"
    },
    {
        description: "Quite simply, an iced coffee is a cold version of your favourite coffee, but it's not simply a coffee that has been left to cool. Like a regular coffee, it's usually a combination of hot espresso and milk. However, ice is added too.",
        id: "11",
        image: "https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        ingredients: [
            "1 lb. ground coffee (wichever you like!)",
            "8 qt. cold water",
            "2-3 spoons of Sweetened condensed milk",
            "(Optional) Skim milk, 2% milk, whole milk, sugar, artificial sweeteners, syrups"
        ],
        name: "Iced",
        price: 5.99
    },
    {
        description: "This Cookies and Cream Milkshake is the perfect way to whip up a special moment for the family. Made of milk, ice cream, and cookies, chocolate, or some other flavoring, all mixed together",
        id: "12",
        image: "https://www.almostsupermom.com/wp-content/uploads/2017/03/Cookies-and-Cream-Mocha-Milkshake-6-684x1024.jpg",
        ingredients: [
            "4 scoops of ice cream",
            "¼ cup of milk",
            "Your favorite cookies"
        ],
        name: "Cookie Milkshake",
        price: 9.99
    }
]

export default data