import React, { useState } from 'react';

function Admin() {
  const [activeTab, setActiveTab] = useState('add'); // Manage active tab state
  const [product, setProduct] = useState({
    name: '',
    description: '',
    rating: '',
    quantity: '',
    category: '',
    image: null,
    id: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0], // Store the file object
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission (e.g., send data to a server)
    console.log(product);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl text-center mb-6">Admin Panel</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('add')}
          className={`px-4 py-2 mx-2 ${activeTab === 'add' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Add Product
        </button>
        <button
          onClick={() => setActiveTab('edit')}
          className={`px-4 py-2 mx-2 ${activeTab === 'edit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Edit Product
        </button>
        <button
          onClick={() => setActiveTab('delete')}
          className={`px-4 py-2 mx-2 ${activeTab === 'delete' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Delete Product
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'add' && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Product ID</label>
              <input
                type="text"
                name="id"
                value={product.id}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Product ID"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Product Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Product Description"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <input
                type="number"
                name="rating"
                value={product.rating}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Product Rating"
                min="1"
                max="5"
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Product Quantity"
                min="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={product.category}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Product Category"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-lg p-2 mt-4 hover:bg-blue-600"
              >
                Upload Product
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === 'edit' && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Edit Product</h2>
          <p className="text-center">This section is for editing a product. (Implementation can be added later.)</p>
        </div>
      )}

      {activeTab === 'delete' && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Delete Product</h2>
          <p className="text-center">This section is for deleting a product. (Implementation can be added later.)</p>
        </div>
      )}
    </div>
  );
}

export default Admin;
