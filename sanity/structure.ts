import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin Dashboard")
    .items([
      // Course Content
      S.listItem()
        .title("Course Content")
        .child(
          S.documentTypeList("course")
            .title("Courses")
            .child((courseId) =>
              S.list()
                .title("Course Options")
                .items([
                  // Option to edit course content
                  S.listItem()
                    .title("Edit Course Content")
                    .child(
                      S.document().schemaType("course").documentId(courseId)
                    ),

                  // Option to view course enrollments
                  S.listItem()
                    .title("View Students")
                    .child(
                      S.documentList()
                        .title("Course Enrollments")
                        .filter(
                          '_type == "enrollment" && course._ref == $courseId'
                        )
                        .params({ courseId })
                    ),
                ])
            )
        ),

      S.divider(),

      // Users
      S.listItem()
        .title("User Management")
        .child(
          S.list()
            .title("Select a Type of User")
            .items([
              // Instructors with options
              S.listItem()
                .title("Instructors")
                .schemaType("instructor")
                .child(
                  S.documentTypeList("instructor")
                    .title("Instructors")
                    .child((instructorId) =>
                      S.list()
                        .title("Instructor Options")
                        .items([
                          // Option to edit instructor details
                          S.listItem()
                            .title("Edit Instructor Details")
                            .child(
                              S.document()
                                .schemaType("instructor")
                                .documentId(instructorId)
                            ),

                          // Option to view instructor's courses
                          S.listItem()
                            .title("View Courses")
                            .child(
                              S.documentList()
                                .title("Instructor's Courses")
                                .filter(
                                  '_type == "course" && instructor._ref == $instructorId'
                                )
                                .params({ instructorId })
                            ),
                        ])
                    )
                ),

              S.listItem()
                .title("Students")
                .schemaType("student")
                .child(
                  S.documentTypeList("student")
                    .title("Students")
                    .child((studentId) =>
                      S.list()
                        .title("Student Options")
                        .items([
                          // Option to edit student details
                          S.listItem()
                            .title("Edit Student Details")
                            .child(
                              S.document()
                                .schemaType("student")
                                .documentId(studentId)
                            ),

                          //Option to view enrollemets
                          S.listItem()
                            .title("View Enrollments")
                            .child(
                              S.documentList()
                                .title("Student's Enrollments")
                                .filter(
                                  '_type == "enrollment" && student._ref == $studentId'
                                )
                                .params({ studentId })
                            ),

                          //Option to view completed lesson

                          S.listItem()
                            .title("View completed Lessons")
                            .child(
                              S.documentList()
                                .title("Completed Lessons")
                                .filter(
                                  '_type == "lessonCompletion" && student._red == $studentId'
                                )
                                .params({ studentId })
                                .defaultOrdering([
                                  { field: "completedAt", direction: "desc" },
                                ])
                            ),
                        ])
                    )
                ),
            ])
        ),

      S.divider(),

      // System Management
      S.listItem()
        .title("System Management")
        .child(
          S.list()
            .title("System Management")
            .items([S.documentTypeListItem("category").title("Categories")])
        ),
    ]);
