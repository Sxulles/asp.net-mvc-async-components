namespace Example.Controllers 
{
    public class ExampleModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public AnotherExampleModel AnotherExampleModel { get; set; }
    }

    public class AnotherExampleModel 
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class HomeController : Controller
    {
        public async Task<IActionResult> GetExampleComponent()
        {
            // Implement data gathering logic like:
            // var exampleList = _DbSet.Examples.ToList();
            return PartialView("_ExamplePartial", exampleList);
        }
    }

    public class HomeController : Controller
    {
        public async Task<IActionResult> GetExampleComponent(int aemId) // aemId = anotherExampleModelId
        {
            // Implement data gathering logic like: 
            // var exampleList = _DbSet.Examples.Where(example => example.AnotherExampleModel.Id > anotherExampleModelId).ToList();
            return PartialView("_ExamplePartial", example);
        }
    }
}