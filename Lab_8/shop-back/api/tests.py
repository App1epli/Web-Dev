from django.test import TestCase
from django.urls import reverse

from .models import Category, Product


class ApiEndpointsTests(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Electronics')
        self.product = Product.objects.create(
            name='Smartphone',
            price=499.99,
            description='Demo product for tests',
            count=12,
            is_active=True,
            category=self.category,
        )

    def test_products_list_returns_json(self):
        response = self.client.get(reverse('products-list'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.json(),
            [
                {
                    'id': self.product.id,
                    'name': 'Smartphone',
                    'price': 499.99,
                    'description': 'Demo product for tests',
                    'count': 12,
                    'is_active': True,
                    'category': self.category.id,
                }
            ],
        )

    def test_product_detail_returns_json(self):
        response = self.client.get(
            reverse('product-detail', kwargs={'id': self.product.id})
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['id'], self.product.id)

    def test_categories_list_returns_json(self):
        response = self.client.get(reverse('categories-list'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.json(),
            [{'id': self.category.id, 'name': 'Electronics'}],
        )

    def test_category_detail_returns_json(self):
        response = self.client.get(
            reverse('category-detail', kwargs={'id': self.category.id})
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'id': self.category.id, 'name': 'Electronics'})

    def test_category_products_returns_json(self):
        response = self.client.get(
            reverse('category-products', kwargs={'id': self.category.id})
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]['id'], self.product.id)
