import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import './style.scss';

/**
 * Enhanced Pack Selector Modal with multi-pack and verse subset selection
 */
const PackSelector = ({ show, onHide, packs, allVerses, onApply, currentSelection }) => {
  const [selectedPacks, setSelectedPacks] = useState({});
  const [rangeInputs, setRangeInputs] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentSelection && Object.keys(currentSelection).length > 0) {
      setSelectedPacks(currentSelection);
    }
  }, [currentSelection]);

  const getPackVerses = (packName) => {
    if (packName === 'TMS 60') {
      return allVerses.filter((v) => v.memory_pack.includes('TMS 60'));
    }
    return allVerses.filter((v) => v.memory_pack === packName);
  };

	const groupVersesByMemoryPack = (verses) => {
    const groups = {};
    verses.forEach((verse) => {
      const memoryPack = verse.memory_pack;
      if (!groups[memoryPack]) {
        groups[memoryPack] = [];
      }
      groups[memoryPack].push(verse);
    });
    return groups;
  };

  const togglePack = (packName, e) => {
    e.stopPropagation();
    setSelectedPacks((prev) => {
      const newSelection = { ...prev };
      if (newSelection[packName]) {
        delete newSelection[packName];
        setRangeInputs((prevRanges) => {
          const newRanges = { ...prevRanges };
          delete newRanges[packName];
          return newRanges;
        });
      } else {
        const verses = getPackVerses(packName);
        newSelection[packName] = {
          selectAll: true,
          verses: verses.map((v) => v.id)
        };
      }
      return newSelection;
    });
    setErrors({});
  };

  const handleRangeChange = (packName, field, value) => {
    setRangeInputs((prev) => ({
      ...prev,
      [packName]: {
        ...prev[packName],
        [field]: value
      }
    }));
  };

  const applyRange = (packName) => {
    const verses = getPackVerses(packName);
    const start = parseInt(rangeInputs[packName]?.start) || 1;
    const end = parseInt(rangeInputs[packName]?.end) || verses.length;

    if (start < 1 || end > verses.length || start > end) {
      setErrors((prev) => ({
        ...prev,
        [packName]: `Invalid range. Enter 1-${verses.length}`
      }));
      return;
    }

    const selectedVerses = verses.slice(start - 1, end).map((v) => v.id);

    setSelectedPacks((prev) => ({
      ...prev,
      [packName]: {
        selectAll: selectedVerses.length === verses.length,
        verses: selectedVerses
      }
    }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[packName];
      return newErrors;
    });
  };

  const toggleVerse = (packName, verseId) => {
    setSelectedPacks((prev) => {
      const newSelection = { ...prev };

      if (!newSelection[packName]) {
        newSelection[packName] = {
          selectAll: false,
          verses: [verseId]
        };
      } else {
        const currentVerses = newSelection[packName].verses;
        if (currentVerses.includes(verseId)) {
          const filtered = currentVerses.filter((id) => id !== verseId);
          if (filtered.length === 0) {
            delete newSelection[packName];
          } else {
            newSelection[packName] = {
              selectAll: false,
              verses: filtered
            };
          }
        } else {
          newSelection[packName] = {
            selectAll: false,
            verses: [...currentVerses, verseId]
          };
        }
      }
      return newSelection;
    });
    setErrors({});
  };

  const handleApply = () => {
    const newErrors = {};

    if (Object.keys(selectedPacks).length === 0) {
      newErrors.general = 'Please select at least one pack or verse';
      setErrors(newErrors);
      return;
    }

    Object.keys(selectedPacks).forEach((packName) => {
      if (selectedPacks[packName].verses.length === 0) {
        newErrors[packName] = 'Pack has no verses selected';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onApply(selectedPacks);
    onHide();
  };

  const handleClear = () => {
    setSelectedPacks({});
    setRangeInputs({});
    setErrors({});
  };

  const getSelectionSummary = () => {
    const packCount = Object.keys(selectedPacks).length;
    const verseCount = Object.values(selectedPacks).reduce(
      (sum, pack) => sum + pack.verses.length,
      0
    );
    return { packCount, verseCount };
  };

  const { packCount, verseCount } = getSelectionSummary();

  const filteredPacks = packs.filter((p) =>
    p.packs.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal show={show} onHide={onHide} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>
          Select Memory Packs
          {packCount > 0 && (
            <div className="mt-2">
              <Badge bg="primary" className="me-2">
                {packCount} Pack{packCount !== 1 ? 's' : ''}
              </Badge>
              <Badge bg="success">
                {verseCount} Verse{verseCount !== 1 ? 's' : ''}
              </Badge>
            </div>
          )}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {errors.general && (
          <Alert variant="danger" dismissible onClose={() => setErrors({})}>
            {errors.general}
          </Alert>
        )}

        <Form.Control
          type="text"
          placeholder="Search packs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-3"
        />

        <Accordion>
          {filteredPacks.map((pack) => {
            const packVerses = getPackVerses(pack.packs);
            const isPackSelected = !!selectedPacks[pack.packs];
            const selectedVerseIds = selectedPacks[pack.packs]?.verses || [];

            return (
              <Accordion.Item eventKey={pack.id} key={pack.id}>
          <Accordion.Header>
            <div className="d-flex align-items-center w-100 pe-3" onClick={(e) => {
              if (e.target.type !== 'checkbox' && !e.target.closest('.form-check')) {
              }
            }}>
              <div className="form-check me-2" onClick={(e) => e.stopPropagation()}>
                <Form.Check
                  type="checkbox"
                  checked={isPackSelected}
                  onChange={(e) => {
                    e.stopPropagation();
                    togglePack(pack.packs, e);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <span className="flex-grow-1">{pack.packs}</span>
              {isPackSelected && (
                <Badge bg="secondary" className="ms-2">
                  {selectedVerseIds.length}/{packVerses.length}
                </Badge>
              )}
            </div>
          </Accordion.Header>
                <Accordion.Body>
                  {errors[pack.packs] && (
                    <Alert variant="warning" dismissible onClose={() => {
                      setErrors((prev) => {
                        const newErrors = { ...prev };
                        delete newErrors[pack.packs];
                        return newErrors;
                      });
                    }}>
                      {errors[pack.packs]}
                    </Alert>
                  )}

                  {/* Range Selection */}
                  <div className="range-selector mb-3 p-3 bg-light rounded">
                    <Form.Label className="fw-semibold">Select by Range:</Form.Label>
                    <InputGroup size="sm" className="mb-1">
                      <Form.Control
                        type="number"
                        placeholder="Start"
                        min="1"
                        max={packVerses.length}
                        value={rangeInputs[pack.packs]?.start || ''}
                        onChange={(e) => handleRangeChange(pack.packs, 'start', e.target.value)}
                        style={{ maxWidth: '80px' }}
                      />
                      <InputGroup.Text>to</InputGroup.Text>
                      <Form.Control
                        type="number"
                        placeholder="End"
                        min="1"
                        max={packVerses.length}
                        value={rangeInputs[pack.packs]?.end || ''}
                        onChange={(e) => handleRangeChange(pack.packs, 'end', e.target.value)}
                        style={{ maxWidth: '80px' }}
                      />
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => applyRange(pack.packs)}
                      >
                        Apply
                      </Button>
                    </InputGroup>
                    <Form.Text className="text-muted">
                      Enter verse numbers (1-{packVerses.length})
                    </Form.Text>
                  </div>

                  <hr />

                  <div className="verse-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {(() => {
                      const groupedVerses = groupVersesByMemoryPack(packVerses);
                      let verseIndex = 0;

                      return Object.entries(groupedVerses).map(([memoryPackName, verses]) => (
                        <div key={memoryPackName} className="memory-pack-group mb-3">
                          <div className="memory-pack-header mb-2">
                            <Badge bg="info" className="me-2">{memoryPackName}</Badge>
                          </div>
                          <div className="ms-3">
                            {verses.map((verse) => {
                              verseIndex++;
                              const currentIndex = verseIndex;
                              return (
                                <Form.Check
                                  key={verse.id}
                                  type="checkbox"
                                  id={`verse-${verse.id}`}
                                  label={
                                    <span>
                                      <span className="text-muted me-1">{currentIndex}.</span>
                                      {verse.reference} - {verse.title}
                                    </span>
                                  }
                                  checked={selectedVerseIds.includes(verse.id)}
                                  onChange={() => toggleVerse(pack.packs, verse.id)}
                                  className="mb-2"
                                />
                              );
                            })}
                          </div>
                        </div>
                      ));
                    })()}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>

        {filteredPacks.length === 0 && (
          <div className="text-center text-muted py-4 fst-italic">
            No packs found matching "{searchTerm}"
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClear}>
          Clear All
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleApply}>
          Apply Selection
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PackSelector;