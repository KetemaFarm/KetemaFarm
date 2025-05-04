import { useState } from 'react';
import { Form } from 'react-router-dom';

function PostLands() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold text-green-600 mb-6">Post Your Land for Urban Farming</h1>
      
      <Form method="post" encType="multipart/form-data" className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-green-600 font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-green-600 font-medium mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-green-600 font-medium mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="size" className="block text-green-600 font-medium mb-2">Size (in areas)</label>
            <input
              type="number"
              id="size"
              name="size"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-green-600 font-medium mb-2">Price per month</label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-green-600 font-medium mb-2">Upload Image</label>
          <div className="flex items-center">
            <label className="flex flex-col items-center px-4 py-2 bg-white text-green-600 rounded-lg border border-green-600 cursor-pointer hover:bg-green-50">
              <span className="text-sm font-medium">Browse Files</span>
              <input 
                type="file" 
                className="hidden" 
                name="image"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </label>
            <span className="ml-4 text-gray-500">
              {selectedFile ? selectedFile.name : "No file selected"}
            </span>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            post
          </button>
        </div>
      </Form>
    </div>
  );
}

export default PostLands;
