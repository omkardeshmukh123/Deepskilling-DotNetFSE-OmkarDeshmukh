using Microsoft.AspNetCore.Mvc;
using FirstWebAPIController.Models;
using FirstWebAPIController.Filters;

namespace FirstWebAPIController.Controllers;

[ApiController]
[Route("api/[controller]")]
[CustomAuthFilter]
public class EmployeeController : ControllerBase
{
      private static List<Employee> employees = new List<Employee>
      {
       new Employee
       {
        Id = 1,
        Name = "John Doe",
        Salary = 50000,
        Permanent = true,
        DateOfBirth = new DateTime(1990, 1, 1),

        Department = new Department
        {
            Id = 1,
            Name = "IT"
        },

        Skills = new List<Skill>
        {
            new Skill { Id = 1, Name = "C#" },
            new Skill { Id = 2, Name = "ASP.NET Core" }
            }
          }
       };


        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
         public ActionResult<List<Employee>> Get()
         {
            return Ok(employees);
         }







// EXCEPTION FILTER HANDSON 3
//     [HttpGet]
//       [ProducesResponseType(StatusCodes.Status200OK)]
//       [ProducesResponseType(StatusCodes.Status500InternalServerError)]
//     public ActionResult<List<Employee>> Get()
//       {
//          throw new Exception("Something went wrong!");
//       }


    [HttpPost]
    public ActionResult<Employee> Post([FromBody] Employee employee)
    {
        return Ok(employee);
    }
  

    
    [HttpPut("{id}")]
    public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
     {
      if (id <= 0)
     {
        return BadRequest("Invalid employee id");
     }

      var existingEmployee = employees.FirstOrDefault(e => e.Id == id);

      if (existingEmployee == null)
      {
        return BadRequest("Invalid employee id");
      }

      existingEmployee.Name = employee.Name;
      existingEmployee.Salary = employee.Salary;
      existingEmployee.Permanent = employee.Permanent;
      existingEmployee.Department = employee.Department;
      existingEmployee.Skills = employee.Skills;
      existingEmployee.DateOfBirth = employee.DateOfBirth;

    return Ok(existingEmployee);
  }

}