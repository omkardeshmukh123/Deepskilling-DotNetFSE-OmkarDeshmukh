using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace FirstWebAPIController.Filters;

public class CustomExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        // Write exception to a file
        File.AppendAllText(
            "ErrorLog.txt",
            $"{DateTime.Now} : {context.Exception.Message}{Environment.NewLine}"
        );

        context.Result = new ObjectResult("Internal Server Error")
        {
            StatusCode = StatusCodes.Status500InternalServerError
        };

        context.ExceptionHandled = true;
    }
}