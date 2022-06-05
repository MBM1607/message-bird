import { MessageOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import * as React from 'react';


const Message = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const res = await fetch('https://i2km7d.deta.dev/message', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: data.get('message'?.toString() || '')
        })
      });

      const resJson = await res.json();

      console.log(res.status);
      console.log(res.statusText);
      console.log(resJson);
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <MessageOutlined />
      </Avatar>

      <Typography component='h1' variant='h5'>
        Send SMS
      </Typography>

      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          label='Message'
          multiline
          rows={6}
          placeholder='Type message content here ...'
          fullWidth
          name='message'
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Message;
