import { useRouter } from 'next/router'
import Head from 'next/head'

export default function CourseDetail({ course }) {
  const router = useRouter()
  const { coursename } = router.query

  return (
    <>
      <Head>
        <title>{course.title} | ILH Saudi Arabia</title>
        <meta
          name="description"
          content={`Learn ${course.title} from ILH, Saudi Arabia’s top professional training institute. ${course.metaDescription}`}
        />
        <meta
          name="keywords"
          content={`${course.title}, ${course.category}, training in Saudi Arabia, ILH courses`}
        />
      </Head>

      <h1>{course.title}</h1>
    </>
  )
}
