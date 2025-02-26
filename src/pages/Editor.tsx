import React, { useState } from 'react';
import { PencilLine, Trash2, Plus, Save, AlertTriangle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Question } from '../types';
import { sampleQuestions } from '../data/questions';

export default function Editor() {
  const [questions, setQuestions] = useState<Question[]>(sampleQuestions);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{show: boolean; questionId: number | null}>({
    show: false,
    questionId: null
  });
  const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
    question: '',
    answer: 0,
    explanation: '',
    category: ''
  });

  const handleEdit = (question: Question) => {
    setEditingQuestion(question);
    setNewQuestion({
      question: question.question,
      answer: question.answer,
      explanation: question.explanation,
      category: question.category
    });
  };

  const cancelEdit = () => {
    setEditingQuestion(null);
    setNewQuestion({
      question: '',
      answer: 0,
      explanation: '',
      category: ''
    });
  };

  const confirmDelete = (id: number) => {
    setDeleteConfirmation({ show: true, questionId: id });
  };

  const handleDelete = () => {
    if (deleteConfirmation.questionId !== null) {
      setQuestions(questions.filter(q => q.id !== deleteConfirmation.questionId));
      setDeleteConfirmation({ show: false, questionId: null });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation({ show: false, questionId: null });
  };

  const handleSave = () => {
    if (!newQuestion.question || !newQuestion.category || !newQuestion.explanation) {
      alert('Mohon lengkapi semua field yang diperlukan');
      return;
    }

    if (editingQuestion) {
      setQuestions(questions.map(q => 
        q.id === editingQuestion.id 
          ? { 
              ...newQuestion, 
              id: editingQuestion.id 
            } as Question 
          : q
      ));
      setEditingQuestion(null);
    } else {
      const newId = Math.max(...questions.map(q => q.id), 0) + 1;
      setQuestions([...questions, { ...newQuestion, id: newId } as Question]);
    }
    
    setNewQuestion({
      question: '',
      answer: 0,
      explanation: '',
      category: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Editor Soal Matematika</h1>
          <Link
            to="/"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Kembali ke Latihan
          </Link>
        </div>

        {/* Form Editor */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {editingQuestion ? 'Edit Soal' : 'Tambah Soal Baru'}
            </h2>
            {editingQuestion && (
              <button
                onClick={cancelEdit}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                title="Batal edit"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pertanyaan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={newQuestion.question}
                onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Masukkan pertanyaan..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jawaban <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={newQuestion.answer}
                onChange={(e) => setNewQuestion({ ...newQuestion, answer: Number(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Masukkan jawaban..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategori <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={newQuestion.category}
                onChange={(e) => setNewQuestion({ ...newQuestion, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Contoh: Aljabar, Geometri, dll..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pembahasan <span className="text-red-500">*</span>
              </label>
              <textarea
                value={newQuestion.explanation}
                onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Masukkan pembahasan lengkap..."
                required
              />
            </div>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>{editingQuestion ? 'Simpan Perubahan' : 'Simpan Soal Baru'}</span>
            </button>
          </div>
        </div>

        {/* Daftar Soal */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Daftar Soal</h2>
          <div className="space-y-4">
            {questions.map((question) => (
              <div
                key={question.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{question.question}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Kategori: {question.category}
                    </p>
                    <p className="text-sm text-gray-600">
                      Jawaban: {question.answer}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(question)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit soal"
                    >
                      <PencilLine className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => confirmDelete(question.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Hapus soal"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {deleteConfirmation.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex items-center space-x-3 text-amber-500 mb-4">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-lg font-semibold">Konfirmasi Hapus</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Apakah Anda yakin ingin menghapus soal ini? Tindakan ini tidak dapat dibatalkan.
              </p>
              <div className="flex space-x-3 justify-end">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}