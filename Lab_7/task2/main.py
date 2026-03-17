from models import Product
from models import Drink
from models import Cake

cake = Cake(1, "Molochniy", 15.0, 3, 10.0, True)
drink = Drink(2, "Cola", 3.0, 5, 500, True)

products = [cake, drink]

for product in products:
    print(product)
    product.consume()
    print("----------------")
