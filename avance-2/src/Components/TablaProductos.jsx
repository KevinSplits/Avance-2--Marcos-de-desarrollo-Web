import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const initialRows = [
    { id: 1, title: 'The Legend of Zelda', genre: 'Aventura', platform: 'Nintendo', releaseDate: '1986-02-21', price: 59.99 },
    { id: 2, title: 'Super Mario Bros', genre: 'Plataforma', platform: 'Nintendo', releaseDate: '1985-09-13', price: 49.99 },
    { id: 3, title: 'Final Fantasy VII', genre: 'RPG', platform: 'PlayStation', releaseDate: '1997-01-31', price: 39.99 },
    { id: 4, title: 'The Witcher 3', genre: 'RPG', platform: 'PC', releaseDate: '2015-05-19', price: 29.99 },
    { id: 5, title: 'Overwatch', genre: 'Shooter', platform: 'PC', releaseDate: '2016-05-24', price: 39.99 },
];

export default function VideoGamesTable() {
    const [rows, setRows] = useState(initialRows);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    const [gameData, setGameData] = useState({
        title: '',
        genre: '',
        platform: '',
        releaseDate: '',
        price: '',
    });

    const handleOpen = () => {
        setEditMode(false);
        setGameData({
            title: '',
            genre: '',
            platform: '',
            releaseDate: '',
            price: '',
        });
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGameData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (editMode && selectedGame) {
            setRows((prevRows) =>
                prevRows.map((row) =>
                    row.id === selectedGame.id
                        ? { ...row, ...gameData }
                        : row
                )
            );
        } else {
            setRows((prevRows) => [
                ...prevRows,
                { id: prevRows.length + 1, ...gameData },
            ]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const handleEdit = (game) => {
        setSelectedGame(game);
        setGameData(game);
        setEditMode(true);
        setOpen(true);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                textAlign: 'center',
                mt: 2,
                px: { xs: 2, md: 3 },
            }}
        >
            <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '100%', mb: 2 }}>
                <Grid item>
                    <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
                        Videojuegos
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleOpen} startIcon={<AddIcon />}>
                        Agregar
                    </Button>
                </Grid>
            </Grid>

            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '10px', textAlign: 'center' }}>ID</th>
                            <th style={{ padding: '10px', textAlign: 'center' }}>Título</th>
                            <th style={{ padding: '10px', textAlign: 'center' }}>Género</th>
                            <th style={{ padding: '10px', textAlign: 'center' }}>Plataforma</th>
                            <th style={{ padding: '10px', textAlign: 'center' }}>Fecha de Lanzamiento</th>
                            <th style={{ padding: '10px', textAlign: 'center' }}>Precio</th>
                            <th style={{ padding: '10px', textAlign: 'center' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '10px', textAlign: 'center' }}>{row.id}</td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>{row.title}</td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>{row.genre}</td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>{row.platform}</td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>{row.releaseDate}</td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>${row.price.toFixed(2)}</td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                    <Button onClick={() => handleEdit(row)} color="primary" size="small" startIcon={<EditIcon />}>
                                        Editar
                                    </Button>
                                    <Button onClick={() => handleDelete(row.id)} color="secondary" size="small" startIcon={<DeleteIcon />}>
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal para agregar o editar videojuego */}
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: 400 },
                    bgcolor: 'background.paper',
                    p: 4,
                    boxShadow: 24,
                    borderRadius: 2,
                }}>
                    <Typography variant="h6" gutterBottom>
                        {editMode ? 'Editar Videojuego' : 'Agregar Nuevo Videojuego'}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Título"
                                fullWidth
                                name="title"
                                value={gameData.title}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Género"
                                fullWidth
                                name="genre"
                                value={gameData.genre}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Plataforma"
                                fullWidth
                                name="platform"
                                value={gameData.platform}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Fecha de Lanzamiento"
                                fullWidth
                                name="releaseDate"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={gameData.releaseDate}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Precio"
                                fullWidth
                                name="price"
                                type="number"
                                value={gameData.price}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                {editMode ? 'Guardar Cambios' : 'Guardar'}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Box>
    );
}
