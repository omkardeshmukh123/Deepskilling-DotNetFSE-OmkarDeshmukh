using System;

class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }
    public string Category { get; set; }

    public Product(int productId, string productName, string category)
    {
        ProductId = productId;
        ProductName = productName;
        Category = category;
    }
}

class Program
{
    public static Product LinearSearch(Product[] products, int searchId)
    {
        foreach (Product product in products)
        {
            if (product.ProductId == searchId)
            {
                return product;
            }
        }

        return null;
    }

    public static Product BinarySearch(Product[] products, int searchId)
    {
        int left = 0;
        int right = products.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (products[mid].ProductId == searchId)
            {
                return products[mid];
            }

            if (products[mid].ProductId < searchId)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return null;
    }

    static void Main()
    {
        Product[] products =
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Headphones", "Electronics")
        };

        int searchId = 104;

        Product linearResult = LinearSearch(products, searchId);

        Console.WriteLine("Linear Search Result:");

        if (linearResult != null)
        {
            Console.WriteLine($"ID: {linearResult.ProductId}");
            Console.WriteLine($"Name: {linearResult.ProductName}");
            Console.WriteLine($"Category: {linearResult.Category}");
        }
        else
        {
            Console.WriteLine("Product Not Found");
        }

        Product binaryResult = BinarySearch(products, searchId);

        Console.WriteLine("\nBinary Search Result:");

        if (binaryResult != null)
        {
            Console.WriteLine($"ID: {binaryResult.ProductId}");
            Console.WriteLine($"Name: {binaryResult.ProductName}");
            Console.WriteLine($"Category: {binaryResult.Category}");
        }
        else
        {
            Console.WriteLine("Product Not Found");
        }
    }
}