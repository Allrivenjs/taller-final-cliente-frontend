import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosClient } from '../../lib';

export const useEditAssistant = () => {
  const [assistants, setAssistans] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const pushAssistant = () => {
    setAssistans([...assistants, 0]);
  };

  const popAssistant = () => {
    setAssistans(assistants.slice(0, assistants.length - 1));
  };

  const editAnAssistant = (index, value) => {
    const newAssistants = assistants.map((assistant, i) => {
      if (i === index) return value;
      return assistants[i];
    });
    setAssistans(newAssistants);
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.post('/actas/attach-asistentes', {
        asistente_id: assistants,
        acta_id: id,
      });
    } catch (e) {
      console.log('Error trying to attach assistants', e);
    }
    setLoading(false);
  };

  return {
    loading,
    assistants,
    pushAssistant,
    popAssistant,
    editAnAssistant,
    onSubmit,
  };
};
