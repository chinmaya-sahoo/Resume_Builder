import React from 'react'

const ProjectForm = ({data , onChange}) => {
    const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };
    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };
  return (
   <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Project
          </h3>
          <p className="text-sm text-gray-500">Add your Project details here</p>
        </div>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-green-50 text-green-600 hover:bg-green-200 rounded-lg  transition-colors "
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No Project added yet.</p>
          <p className="text-sm">Click "Add Project" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((Project, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-start">
                <h4>Project #{index + 1}</h4>
                <button
                  onClick={() => removeProject(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={Project.institution || ""}
                  onChange={(e) =>
                    updateProject(index, "institution", e.target.value)
                  }
                  type="text"
                  placeholder="Institute Name"
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
                <input
                  value={Project.degree || ""}
                  onChange={(e) =>
                    updateProject(index, "degree", e.target.value)
                  }
                  type="text"
                  placeholder="Degree (eg. Bachelor's , Master's)"
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
                <input
                  value={Project.field || ""}
                  onChange={(e) =>
                    updateProject(index, "field", e.target.value)
                  }
                  type="text"
                  placeholder="Field of Study"
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
                <input
                  value={Project.graduation_date || ""}
                  onChange={(e) =>
                    updateProject(index, "graduation_date", e.target.value)
                  }
                  type="month"
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
                <input
                  value={Project.gpa || ""}
                  onChange={(e) =>
                    updateProject(index, "gpa", e.target.value)
                  }
                  type="text"
                  placeholder="GPA (e.g., 8.8/10)"
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectForm