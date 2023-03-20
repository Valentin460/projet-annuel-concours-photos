<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ConcoursRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConcoursRepository::class)]
#[ApiResource]
class Concours
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $etat = null;

    #[ORM\Column(length: 255)]
    private ?string $name_concours = null;

    #[ORM\Column(length: 255)]
    private ?string $visual_concours = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $reglement = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $dotations = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_creation = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_publication = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_start_soumission = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_end_soumission = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_start_votes = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_end_votes = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_results = null;

    #[ORM\Column]
    private ?int $ponderation_votes_jury = null;

    #[ORM\Column]
    private ?int $nb_max_votes = null;

    #[ORM\Column]
    private ?int $nb_prix = null;

    #[ORM\Column]
    private ?int $critere_age_min = null;

    #[ORM\Column]
    private ?int $critere_age_max = null;

    #[ORM\ManyToOne(inversedBy: 'concours_publish')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Organisation $organisation_publish = null;

    #[ORM\OneToMany(mappedBy: 'concours', targetEntity: Photo::class)]
    private Collection $photos;

    #[ORM\ManyToMany(targetEntity: Theme::class, mappedBy: 'concours')]
    private Collection $themes;

    #[ORM\ManyToMany(targetEntity: CategoryParticipant::class, mappedBy: 'concours')]
    private Collection $category_participant;

    #[ORM\ManyToMany(targetEntity: Critere::class, mappedBy: 'concours')]
    private Collection $critere;

    #[ORM\OneToMany(mappedBy: 'organisation', targetEntity: ConcoursOrganisation::class)]
    private Collection $concoursOrganisation;

    #[ORM\OneToMany(mappedBy: 'Concours', targetEntity: MembreConcours::class)]
    private Collection $membreConcours;

    #[ORM\OneToMany(mappedBy: 'membre', targetEntity: MembreConcoursWin::class)]
    private Collection $membreConcoursWin;

    public function __construct()
    {
        $this->organisation = new ArrayCollection();
        $this->photos = new ArrayCollection();
        $this->membres_rank = new ArrayCollection();
        $this->members_jury = new ArrayCollection();
        $this->themes = new ArrayCollection();
        $this->category_participant = new ArrayCollection();
        $this->critere = new ArrayCollection();
        $this->concoursOrganisation = new ArrayCollection();
        $this->membreConcours = new ArrayCollection();
        $this->membreConcoursWin = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isEtat(): ?bool
    {
        return $this->etat;
    }

    public function setEtat(bool $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getNameConcours(): ?string
    {
        return $this->name_concours;
    }

    public function setNameConcours(string $name_concours): self
    {
        $this->name_concours = $name_concours;

        return $this;
    }

    public function getVisualConcours(): ?string
    {
        return $this->visual_concours;
    }

    public function setVisualConcours(string $visual_concours): self
    {
        $this->visual_concours = $visual_concours;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getReglement(): ?string
    {
        return $this->reglement;
    }

    public function setReglement(string $reglement): self
    {
        $this->reglement = $reglement;

        return $this;
    }

    public function getDotations(): ?string
    {
        return $this->dotations;
    }

    public function setDotations(string $dotations): self
    {
        $this->dotations = $dotations;

        return $this;
    }

    public function getDateCreation(): ?\DateTimeInterface
    {
        return $this->date_creation;
    }

    public function setDateCreation(\DateTimeInterface $date_creation): self
    {
        $this->date_creation = $date_creation;

        return $this;
    }

    public function getDatePublication(): ?\DateTimeInterface
    {
        return $this->date_publication;
    }

    public function setDatePublication(\DateTimeInterface $date_publication): self
    {
        $this->date_publication = $date_publication;

        return $this;
    }

    public function getDateStartSoumission(): ?\DateTimeInterface
    {
        return $this->date_start_soumission;
    }

    public function setDateStartSoumission(\DateTimeInterface $date_start_soumission): self
    {
        $this->date_start_soumission = $date_start_soumission;

        return $this;
    }

    public function getDateEndSoumission(): ?\DateTimeInterface
    {
        return $this->date_end_soumission;
    }

    public function setDateEndSoumission(\DateTimeInterface $date_end_soumission): self
    {
        $this->date_end_soumission = $date_end_soumission;

        return $this;
    }

    public function getDateStartVotes(): ?\DateTimeInterface
    {
        return $this->date_start_votes;
    }

    public function setDateStartVotes(\DateTimeInterface $date_start_votes): self
    {
        $this->date_start_votes = $date_start_votes;

        return $this;
    }

    public function getDateEndVotes(): ?\DateTimeInterface
    {
        return $this->date_end_votes;
    }

    public function setDateEndVotes(\DateTimeInterface $date_end_votes): self
    {
        $this->date_end_votes = $date_end_votes;

        return $this;
    }

    public function getDateResults(): ?\DateTimeInterface
    {
        return $this->date_results;
    }

    public function setDateResults(\DateTimeInterface $date_results): self
    {
        $this->date_results = $date_results;

        return $this;
    }

    public function getPonderationVotesJury(): ?int
    {
        return $this->ponderation_votes_jury;
    }

    public function setPonderationVotesJury(int $ponderation_votes_jury): self
    {
        $this->ponderation_votes_jury = $ponderation_votes_jury;

        return $this;
    }

    public function getNbMaxVotes(): ?int
    {
        return $this->nb_max_votes;
    }

    public function setNbMaxVotes(int $nb_max_votes): self
    {
        $this->nb_max_votes = $nb_max_votes;

        return $this;
    }

    public function getNbPrix(): ?int
    {
        return $this->nb_prix;
    }

    public function setNbPrix(int $nb_prix): self
    {
        $this->nb_prix = $nb_prix;

        return $this;
    }

    public function getCritereAgeMin(): ?int
    {
        return $this->critere_age_min;
    }

    public function setCritereAgeMin(int $critere_age_min): self
    {
        $this->critere_age_min = $critere_age_min;

        return $this;
    }

    public function getCritereAgeMax(): ?int
    {
        return $this->critere_age_max;
    }

    public function setCritereAgeMax(int $critere_age_max): self
    {
        $this->critere_age_max = $critere_age_max;

        return $this;
    }

    /**
     * @return Collection<int, organisation>
     */
    public function getOrganisation(): Collection
    {
        return $this->organisation;
    }

    public function getOrganisationPublish(): ?Organisation
    {
        return $this->organisation_publish;
    }

    public function setOrganisationPublish(?Organisation $organisation_publish): self
    {
        $this->organisation_publish = $organisation_publish;

        return $this;
    }

    /**
     * @return Collection<int, Photo>
     */
    public function getPhotos(): Collection
    {
        return $this->photos;
    }

    public function addPhoto(Photo $photo): self
    {
        if (!$this->photos->contains($photo)) {
            $this->photos->add($photo);
            $photo->setConcours($this);
        }

        return $this;
    }

    public function removePhoto(Photo $photo): self
    {
        if ($this->photos->removeElement($photo)) {
            // set the owning side to null (unless already changed)
            if ($photo->getConcours() === $this) {
                $photo->setConcours(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Theme>
     */
    public function getThemes(): Collection
    {
        return $this->themes;
    }

    public function addTheme(Theme $theme): self
    {
        if (!$this->themes->contains($theme)) {
            $this->themes->add($theme);
            $theme->addConcour($this);
        }

        return $this;
    }

    public function removeTheme(Theme $theme): self
    {
        if ($this->themes->removeElement($theme)) {
            $theme->removeConcour($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, CategoryParticipant>
     */
    public function getCategoryParticipant(): Collection
    {
        return $this->category_participant;
    }

    public function addCategoryParticipant(CategoryParticipant $categoryParticipant): self
    {
        if (!$this->category_participant->contains($categoryParticipant)) {
            $this->category_participant->add($categoryParticipant);
            $categoryParticipant->addConcour($this);
        }

        return $this;
    }

    public function removeCategoryParticipant(CategoryParticipant $categoryParticipant): self
    {
        if ($this->category_participant->removeElement($categoryParticipant)) {
            $categoryParticipant->removeConcour($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Critere>
     */
    public function getCritere(): Collection
    {
        return $this->critere;
    }

    public function addCritere(Critere $critere): self
    {
        if (!$this->critere->contains($critere)) {
            $this->critere->add($critere);
            $critere->addConcour($this);
        }

        return $this;
    }

    public function removeCritere(Critere $critere): self
    {
        if ($this->critere->removeElement($critere)) {
            $critere->removeConcour($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, ConcoursOrganisation>
     */
    public function getConcoursOrganisation(): Collection
    {
        return $this->concoursOrganisation;
    }

    public function addConcoursOrganisation(ConcoursOrganisation $concoursOrganisation): self
    {
        if (!$this->concoursOrganisation->contains($concoursOrganisation)) {
            $this->concoursOrganisation->add($concoursOrganisation);
            $concoursOrganisation->setOrganisation($this);
        }

        return $this;
    }

    public function removeConcoursOrganisation(ConcoursOrganisation $concoursOrganisation): self
    {
        if ($this->concoursOrganisation->removeElement($concoursOrganisation)) {
            // set the owning side to null (unless already changed)
            if ($concoursOrganisation->getOrganisation() === $this) {
                $concoursOrganisation->setOrganisation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MembreConcours>
     */
    public function getMembreConcours(): Collection
    {
        return $this->membreConcours;
    }

    public function addMembreConcour(MembreConcours $membreConcour): self
    {
        if (!$this->membreConcours->contains($membreConcour)) {
            $this->membreConcours->add($membreConcour);
            $membreConcour->setConcours($this);
        }

        return $this;
    }

    public function removeMembreConcour(MembreConcours $membreConcour): self
    {
        if ($this->membreConcours->removeElement($membreConcour)) {
            // set the owning side to null (unless already changed)
            if ($membreConcour->getConcours() === $this) {
                $membreConcour->setConcours(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MembreConcoursWin>
     */
    public function getMembreConcoursWin(): Collection
    {
        return $this->membreConcoursWin;
    }

    public function addMembreConcoursWin(MembreConcoursWin $membreConcoursWin): self
    {
        if (!$this->membreConcoursWin->contains($membreConcoursWin)) {
            $this->membreConcoursWin->add($membreConcoursWin);
            $membreConcoursWin->setMembre($this);
        }

        return $this;
    }

    public function removeMembreConcoursWin(MembreConcoursWin $membreConcoursWin): self
    {
        if ($this->membreConcoursWin->removeElement($membreConcoursWin)) {
            // set the owning side to null (unless already changed)
            if ($membreConcoursWin->getMembre() === $this) {
                $membreConcoursWin->setMembre(null);
            }
        }

        return $this;
    }
}
