import * as React from 'react';

interface EmailTemplateProps {
  message: string,
  name: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  message, name
}) => (
  <div>
    <h1>Corrente Azul FeedBack de {name}</h1>
    <p>{message}</p>
  </div>
);