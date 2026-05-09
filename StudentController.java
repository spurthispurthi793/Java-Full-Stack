@RestController
@RequestMapping("/students")

public class StudentController {

    @GetMapping
    public List<String> getStudents() {
        return List.of("Rahul", "Priya");
    }

    @PostMapping
    public String addStudent() {
        return "Student Added";
    }
}
