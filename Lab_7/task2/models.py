class Product:
    def __init__(self, 
                 product_id: int, 
                 product_name: str, 
                 product_price: float, 
                 product_amount: int):
        self.id = product_id
        self.name = product_name
        self.price = product_price
        self.amount = product_amount
    
    def set_id(self, id): self.id = id
    def set_name(self, name): self.name = name
    def set_price(self, price ): self.price = price
    def set_amount(self, n): self.amount = n
    def dec_amount(self, n: int): 
        if self.amount < 0:
            return "THE TOTAL AMOUNT IS 0"
        
        if self.amount - n < 0:
            self.amount = 0
        else: self.amount -= n
    def inc_amount(self, n: int): self.amount += n
     
    def __str__(self):
        return f"""Product ID: {self.id}\nProduct Name: {self.name}\nProduct Price: {self.price}\nProduct Amount: {self.amount}"""

class Cake(Product):
    def __init__(self,
                 id,
                 name,
                 price,
                 amount,
                 radius:float, 
                 is_cream:bool):
        super().__init__(id,name,price,amount)
        self.radius = radius
        self.is_cream = is_cream
    
    def __str__(self):
        return f"""{super().__str__()}\nCake Radius: {self.radius}\nHas Cream: {self.is_cream}"""

    def area(self):
        import math
        return math.pi * self.radius ** 2
    
    def consume(self):
        if(self.amount > 0):
            self.amount -= 1
            print("MMMMM KAK BKYCHO")
        else:
            print("There is nothing we can eat...")

class Drink(Product):
    def __init__(self, 
                 product_id: int, 
                 name: str, 
                 price: float,
                 amount: int, 
                 volume_ml: int, 
                 is_cold: bool):
        super().__init__(product_id, name, price, amount)

        self.volume_ml = volume_ml
        self.is_cold = is_cold

    def __str__(self):
        return ( super().__str__() + f"\nVolume: {self.volume_ml} ml\nCold drink: {self.is_cold}")

    def consume(self):
        if(self.amount > 0):
            self.amount -= 1
            print("Absolute drink")
        else:
            print("There is nothing we can drink")

        
