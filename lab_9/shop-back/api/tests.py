from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Category, Product


class ApiEndpointsTests(APITestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Gaming')
        self.product = Product.objects.create(
            name='VR Headset',
            price=499.99,
            description='Demo product for tests',
            count=12,
            is_active=True,
            category=self.category,
        )

    def test_categories_list_returns_json(self):
        response = self.client.get(reverse('category-list'))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn(
            {'id': self.category.id, 'name': 'Gaming'},
            response.json(),
        )

    def test_category_products_action_returns_products(self):
        response = self.client.get(
            reverse('category-products', kwargs={'pk': self.category.id})
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]['id'], self.product.id)

    def test_create_category(self):
        response = self.client.post(
            reverse('category-list'),
            {'name': 'Sports'},
            format='json',
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Category.objects.filter(name='Sports').count(), 1)

    def test_products_list_returns_json(self):
        response = self.client.get(reverse('product-list'))

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(any(item['id'] == self.product.id for item in response.json()))

    def test_create_update_and_delete_product(self):
        create_response = self.client.post(
            reverse('product-list'),
            {
                'name': 'Laptop',
                'price': 1299.99,
                'description': 'Powerful work machine',
                'count': 5,
                'is_active': True,
                'category': self.category.id,
            },
            format='json',
        )

        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)
        product_id = create_response.json()['id']

        update_response = self.client.put(
            reverse('product-detail', kwargs={'pk': product_id}),
            {
                'name': 'Laptop Pro',
                'price': 1499.99,
                'description': 'Updated work machine',
                'count': 4,
                'is_active': True,
                'category': self.category.id,
            },
            format='json',
        )
        self.assertEqual(update_response.status_code, status.HTTP_200_OK)

        delete_response = self.client.delete(
            reverse('product-detail', kwargs={'pk': product_id})
        )
        self.assertEqual(delete_response.status_code, status.HTTP_204_NO_CONTENT)
