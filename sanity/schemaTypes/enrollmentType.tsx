
import Image from "next/image";
import { defineField, defineType } from "sanity";

export const enrollmentType = defineType({
    name: "enrollment",
    title: "Enrollment",
    type: "document",
    fields: [
        defineField({
            name: "student",
            title: "Student",
            type: "reference",
            to: [{
                type: "student"
            }],
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "course",
            title: "Course",
            type: "reference",
            to: [{
                type: "course"
            }],
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "amount",
            title: "Amount",
            type: "number",
            validation: (rule) => rule.required().min(0),
            description: "The amount paid for the course enrollment in Rupees (INR)."
        }),
        defineField({
            name: "paymentId",
            title: "Payment ID",
            type: "string",
            validation: (rule) => rule.required(),
            description: "The Stripe payment ID for the course enrollment."
        }),
        defineField({
            name: "enrollmentAt",
            title: "Enrollment At",
            type: "datetime",
            initialValue: () => {
                const istDate = new Date();
                istDate.setMinutes(istDate.getMinutes() + 330); // Convert to IST (UTC+5:30)
                return istDate.toISOString();
            }
        })

    ],
    preview: {
        select: {
            courseTitle: "course.title",
            studentFirstName: "student.firstName",
            studentLastName: "student.lastName",
            studentImage: "student.imageUrl"
        },
        prepare({
            courseTitle,
            studentFirstName,
            studentLastName,
            studentImage
        }) {
            return {
                title: `${studentFirstName} ${studentLastName}`,
                subtitle: courseTitle,
                media: (
                    <Image src={studentImage} alt={`${studentFirstName} ${studentLastName}`} width={100} height={100}
                    />
                )
            }
        }
    }
})