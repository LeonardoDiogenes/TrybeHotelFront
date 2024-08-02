interface LoginResponse {
  token: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await fetch('https://localhost:5001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Falha no login');
  }

  const data = await response.json();
  console.log(data);
  return data;
};