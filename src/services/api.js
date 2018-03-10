import switchcase from 'utils/switchcase';

class apiService {
  endpoint = process.env.REACT_APP_API_URL;

  async setDiagnosis(diagnosis) {
    const url = `${this.endpoint}/user`;

    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(diagnosis),
    });

    if (!response.ok) {
      const error = switchcase({
        '500': 'The service dooesn\'t work'
      })('An unexpected error ocurred')(response.status);

      throw new Error(error);
    }

    const data = await response.json();

    if (data.Error) {
      throw new Error(`There was an error in the response ${data.Error}`);
    }

    console.log(data);

    return data;
  }
}

export default new apiService();
