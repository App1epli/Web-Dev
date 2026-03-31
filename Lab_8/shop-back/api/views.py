from django.http import JsonResponse

from .models import Category, Product


def products_list(request):
    products = Product.objects.select_related('category').all()
    data = [product.to_dict() for product in products]
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.select_related('category').get(id=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

    return JsonResponse(product.to_dict())


def categories_list(request):
    categories = Category.objects.all()
    data = [category.to_dict() for category in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

    return JsonResponse(category.to_dict())


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

    products = category.products.all()
    data = [product.to_dict() for product in products]
    return JsonResponse(data, safe=False)
