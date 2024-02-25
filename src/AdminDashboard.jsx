import React, { useState } from 'react';
import axios from 'axios';

const AddProjectForm = () => {
  const [projectId, setId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [url, setUrl] = useState('');

  const handleAddTag = () => {
    if (newTag.trim() !== '') {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        id: projectId,
        title: projectName,
        description: description,
        tags: tags,
        url: url
      };

      // API'ye POST isteği gönder
      const response = await axios.post('https://portfolio-api-81h0.onrender.com/projects', data);
      console.log('Yeni proje eklendi:', response.data);

      // Form alanlarını sıfırla
      setId('');
      setProjectName('');
      setDescription('');
      setTags([]);
      setUrl('');
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" placeholder='Proje Id' value={projectId} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        <input type="text" placeholder='Proje İsmi' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
      </label>
      <label>
        <input type="text" placeholder='Proje Açıklaması' value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <input type="text" placeholder='Proje Tagları' value={newTag} onChange={(e) => setNewTag(e.target.value)} />
        <button type="button" onClick={handleAddTag}>Tag Ekle</button>
      </label>
      <label>
        <input type="text" placeholder='Proje Linki' value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <button type="submit">Projeyi Ekle</button>
    </form>
  );
};

export default AddProjectForm;