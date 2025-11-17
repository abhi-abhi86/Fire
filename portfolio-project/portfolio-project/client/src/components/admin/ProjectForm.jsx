import { useState, useEffect } from 'react'
import api from '../../lib/api'
import AnimatedInput from '../ui/AnimatedInput'
import MagneticButton from '../ui/MagneticButton'

const ProjectForm = () => {
  const [projects, setProjects] = useState([])
  const [editingProject, setEditingProject] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
    techTags: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await api.get('/projects')
      setProjects(response.data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const dataToSend = {
        ...formData,
        techTags: formData.techTags.split(',').map(tag => tag.trim())
      }

      if (editingProject) {
        await api.put(`/projects/${editingProject._id}`, dataToSend)
      } else {
        await api.post('/projects', dataToSend)
      }

      setFormData({
        title: '',
        shortDescription: '',
        fullDescription: '',
        imageUrl: '',
        githubUrl: '',
        liveUrl: '',
        techTags: ''
      })
      setEditingProject(null)
      fetchProjects()
    } catch (error) {
      console.error('Error saving project:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      shortDescription: project.shortDescription,
      fullDescription: project.fullDescription,
      imageUrl: project.imageUrl,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      techTags: project.techTags.join(', ')
    })
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await api.delete(`/projects/${id}`)
        fetchProjects()
      } catch (error) {
        console.error('Error deleting project:', error)
      }
    }
  }

  const handleCancel = () => {
    setEditingProject(null)
    setFormData({
      title: '',
      shortDescription: '',
      fullDescription: '',
      imageUrl: '',
      githubUrl: '',
      liveUrl: '',
      techTags: ''
    })
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-6 text-2xl font-bold">
          {editingProject ? 'Edit Project' : 'Add New Project'}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <AnimatedInput
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <AnimatedInput
            type="text"
            name="shortDescription"
            placeholder="Short Description"
            value={formData.shortDescription}
            onChange={handleInputChange}
            required
          />
          <AnimatedInput
            type="textarea"
            name="fullDescription"
            placeholder="Full Description"
            value={formData.fullDescription}
            onChange={handleInputChange}
            required
          />
          <AnimatedInput
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
          <AnimatedInput
            type="url"
            name="githubUrl"
            placeholder="GitHub URL"
            value={formData.githubUrl}
            onChange={handleInputChange}
          />
          <AnimatedInput
            type="url"
            name="liveUrl"
            placeholder="Live Demo URL"
            value={formData.liveUrl}
            onChange={handleInputChange}
          />
          <div className="md:col-span-2">
            <AnimatedInput
              type="text"
              name="techTags"
              placeholder="Tech Tags (comma-separated)"
              value={formData.techTags}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex mt-6 space-x-4">
          <MagneticButton
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            {loading ? 'Saving...' : editingProject ? 'Update Project' : 'Add Project'}
          </MagneticButton>
          {editingProject && (
            <MagneticButton
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
            >
              Cancel
            </MagneticButton>
          )}
        </div>
      </form>

      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-6 text-2xl font-bold">Existing Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project._id} className="flex items-center justify-between p-4 border rounded">
              <div>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.shortDescription}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="px-3 py-1 text-sm text-white bg-yellow-600 rounded hover:bg-yellow-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectForm
