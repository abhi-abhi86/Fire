import { useEffect, useState } from 'react'
import api from '../../lib/api'

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
    techTags: '',
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
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const techTagsArray = formData.techTags.split(',').map(tag => tag.trim()).filter(tag => tag)

      if (editingProject) {
        await api.put(`/projects/${editingProject._id}`, {
          ...formData,
          techTags: techTagsArray,
        })
      } else {
        await api.post('/projects', {
          ...formData,
          techTags: techTagsArray,
        })
      }

      setFormData({
        title: '',
        shortDescription: '',
        fullDescription: '',
        imageUrl: '',
        githubUrl: '',
        liveUrl: '',
        techTags: '',
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
      githubUrl: project.githubUrl || '',
      liveUrl: project.liveUrl || '',
      techTags: project.techTags.join(', '),
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
      techTags: '',
    })
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">
        {editingProject ? 'Edit Project' : 'Add New Project'}
      </h2>

      <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-gray-800 rounded-lg">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-white">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-700 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-white">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-700 rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-white">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
            className="w-full p-2 text-white bg-gray-700 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-white">Full Description</label>
          <textarea
            name="fullDescription"
            value={formData.fullDescription}
            onChange={handleInputChange}
            rows={4}
            className="w-full p-2 text-white bg-gray-700 rounded"
            required
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-white">GitHub URL</label>
            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-white">Live URL</label>
            <input
              type="url"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-700 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-white">Tech Tags (comma-separated)</label>
          <input
            type="text"
            name="techTags"
            value={formData.techTags}
            onChange={handleInputChange}
            className="w-full p-2 text-white bg-gray-700 rounded"
            placeholder="React, Node.js, MongoDB"
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="text-black btn bg-accent hover:bg-accent/80"
          >
            {loading ? 'Saving...' : (editingProject ? 'Update Project' : 'Add Project')}
          </button>
          {editingProject && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-600 btn hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Existing Projects</h3>
        {projects.map((project) => (
          <div key={project._id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
            <div>
              <h4 className="font-semibold text-white">{project.title}</h4>
              <p className="text-gray-400">{project.shortDescription}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(project)}
                className="bg-blue-600 btn hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="bg-red-600 btn hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectForm
