import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<Partial<ITodo>>({});

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    saveTodo(e, formData);
    setFormData({}); // Clear the form fields after submission
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleForm}
            type="text"
            id="name"
            value={formData.name || ""}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleForm}
            type="text"
            id="description"
            value={formData.description || ""}
          />
        </div>
      </div>
      <button disabled={!formData.name || !formData.description}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
