@RestController
@RequestMapping("/tasks")

public class TaskController {

    @GetMapping
    public List<String> getTasks() {
        return List.of("Task 1", "Task 2");
    }

    @PostMapping
    public String addTask() {
        return "Task Added";
    }

    @DeleteMapping("/{id}")
    public String deleteTask() {
        return "Task Deleted";
    }
}
