package entity;

public class Staff {
    private int id;
    private String firstName;
    private String lastName;
    private String nickname;
    private double salary;

    public Staff() {
    }

    public Staff(int id, String firstName, String lastName, String nickname, double salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public static final class StaffBuilder {
        private int id;
        private String firstName;
        private String lastName;
        private String nickname;
        private double salary;

        private StaffBuilder() {
        }

        public static StaffBuilder aStaff() {
            return new StaffBuilder();
        }

        public StaffBuilder id(int id) {
            this.id = id;
            return this;
        }

        public StaffBuilder firstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public StaffBuilder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public StaffBuilder nickname(String nickname) {
            this.nickname = nickname;
            return this;
        }

        public StaffBuilder salary(double salary) {
            this.salary = salary;
            return this;
        }

        public Staff build() {
            return new Staff(id, firstName, lastName, nickname, salary);
        }
    }
}
