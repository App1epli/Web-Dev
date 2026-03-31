from django.db import migrations


def seed_shop_data(apps, schema_editor):
    Category = apps.get_model('api', 'Category')
    Product = apps.get_model('api', 'Product')

    category_names = [
        'Electronics',
        'Clothing',
        'Books',
        'Home & Kitchen',
    ]

    categories = {}
    for category_name in category_names:
        category, _ = Category.objects.get_or_create(name=category_name)
        categories[category_name] = category

    products = [
        ('Smartphone', 499.99, 'Latest smartphone with OLED display', 12, True, 'Electronics'),
        ('Laptop', 1199.99, 'Lightweight laptop for work and study', 7, True, 'Electronics'),
        ('Wireless Mouse', 29.99, 'Comfortable wireless mouse', 30, True, 'Electronics'),
        ('Bluetooth Headphones', 79.99, 'Noise-isolating headphones', 18, True, 'Electronics'),
        ('Smart Watch', 199.99, 'Fitness and notification smartwatch', 14, True, 'Electronics'),
        ('T-Shirt', 14.99, 'Cotton t-shirt for everyday wear', 40, True, 'Clothing'),
        ('Jeans', 39.99, 'Classic blue denim jeans', 22, True, 'Clothing'),
        ('Hoodie', 34.99, 'Warm hoodie with front pocket', 16, True, 'Clothing'),
        ('Sneakers', 59.99, 'Comfortable casual sneakers', 20, True, 'Clothing'),
        ('Jacket', 89.99, 'Water-resistant light jacket', 10, True, 'Clothing'),
        ('Django for Beginners', 24.99, 'Beginner-friendly Django guide', 15, True, 'Books'),
        ('REST API Design', 29.99, 'Practical book about API patterns', 11, True, 'Books'),
        ('Clean Code', 32.50, 'Software craftsmanship classic', 9, True, 'Books'),
        ('Python Crash Course', 27.99, 'Hands-on Python introduction', 17, True, 'Books'),
        ('Algorithms Illustrated', 35.00, 'Visual guide to algorithms', 8, True, 'Books'),
        ('Coffee Maker', 69.99, 'Programmable coffee maker', 6, True, 'Home & Kitchen'),
        ('Blender', 54.99, 'High-speed kitchen blender', 8, True, 'Home & Kitchen'),
        ('Desk Lamp', 22.99, 'LED desk lamp with warm light', 19, True, 'Home & Kitchen'),
        ('Vacuum Cleaner', 129.99, 'Compact vacuum cleaner', 5, True, 'Home & Kitchen'),
        ('Cookware Set', 149.99, 'Non-stick cookware set', 4, True, 'Home & Kitchen'),
    ]

    for name, price, description, count, is_active, category_name in products:
        Product.objects.update_or_create(
            name=name,
            defaults={
                'price': price,
                'description': description,
                'count': count,
                'is_active': is_active,
                'category': categories[category_name],
            },
        )


def unseed_shop_data(apps, schema_editor):
    Category = apps.get_model('api', 'Category')
    Product = apps.get_model('api', 'Product')

    product_names = [
        'Smartphone',
        'Laptop',
        'Wireless Mouse',
        'Bluetooth Headphones',
        'Smart Watch',
        'T-Shirt',
        'Jeans',
        'Hoodie',
        'Sneakers',
        'Jacket',
        'Django for Beginners',
        'REST API Design',
        'Clean Code',
        'Python Crash Course',
        'Algorithms Illustrated',
        'Coffee Maker',
        'Blender',
        'Desk Lamp',
        'Vacuum Cleaner',
        'Cookware Set',
    ]
    category_names = [
        'Electronics',
        'Clothing',
        'Books',
        'Home & Kitchen',
    ]

    Product.objects.filter(name__in=product_names).delete()
    Category.objects.filter(name__in=category_names).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_shop_data, unseed_shop_data),
    ]
