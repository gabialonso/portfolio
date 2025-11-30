type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
}

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}
