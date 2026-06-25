using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;

using var context = new AppDbContext();

// Filter and Sort
var filtered = await context.Products
    .Where(p => p.Price > 1000)
    .OrderByDescending(p => p.Price)
    .ToListAsync();

Console.WriteLine("Filtered Products:");

foreach (var p in filtered)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}

// Projection
var productDTOs = await context.Products
    .Select(p => new
    {
        p.Name,
        p.Price
    })
    .ToListAsync();

Console.WriteLine("\nDTO:");

foreach (var p in productDTOs)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}