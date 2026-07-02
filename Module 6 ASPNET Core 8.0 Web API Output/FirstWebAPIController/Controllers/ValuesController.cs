using Microsoft.AspNetCore.Mvc;

namespace FirstWebAPIController.Controllers;

[ApiController]
[Route("api/Emp")]
public class ValuesController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new string[]
        {
            "Apple",
            "Banana",
            "Mango"
        });
    }

    [HttpPost]
    public IActionResult Post()
    {
        return Ok("Data Added Successfully");
    }

    [HttpPut]
    public IActionResult Put()
    {
        return Ok("Data Updated Successfully");
    }

    [HttpDelete]
    public IActionResult Delete()
    {
        return Ok("Data Deleted Successfully");
    }
}