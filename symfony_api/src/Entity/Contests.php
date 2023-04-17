<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContestsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContestsRepository::class)]
#[ApiResource()]
class Contests
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $state = null;

    #[ORM\Column]
    private ?bool $isSpotlighted = false;

    #[ORM\Column(length: 255)]
    private ?string $name_contests = null;

    #[ORM\Column(length: 255)]
    private ?string $visual_contests = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $rules = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $prices = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_creation = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_publication = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_start_submissions = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_end_submissions = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_start_votes = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_end_votes = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_results = null;

    #[ORM\Column]
    private ?int $jury_votes_weighting = null;

    #[ORM\Column]
    private ?int $nb_max_votes = null;

    #[ORM\Column]
    private ?int $nb_prices = null;

    #[ORM\Column]
    private ?int $criteria_age_min = null;

    #[ORM\Column]
    private ?int $criteria_age_max = null;

    #[ORM\ManyToOne(inversedBy: 'contests_publish')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Organizations $organizations_publish;

    #[ORM\OneToMany(mappedBy: 'contests', targetEntity: Pictures::class)]
    private Collection $pictures;

    #[ORM\ManyToMany(targetEntity: Theme::class, mappedBy: 'contests')]
    private Collection $themes;

    #[ORM\ManyToMany(targetEntity: CategoryParticipant::class, mappedBy: 'contests')]
    private Collection $category_participant;

    #[ORM\ManyToMany(targetEntity: Criteria::class, mappedBy: 'contests')]
    private Collection $criteria;

    #[ORM\OneToMany(mappedBy: 'organization', targetEntity: ContestsOrganizations::class)]
    private Collection $contestsOrganizations;

    #[ORM\OneToMany(mappedBy: 'contests', targetEntity: MembersContests::class)]
    private Collection $membersContests;

    #[ORM\OneToMany(mappedBy: 'members', targetEntity: MembersContestsWin::class)]
    private Collection $membersContestsWin;

    #[ORM\OneToMany(mappedBy: 'Contest', targetEntity: Files::class)]
    private Collection $files;

    public function __construct()
    {
        $this->organizations_publish = new ArrayCollection();
        $this->pictures = new ArrayCollection();
        $this->themes = new ArrayCollection();
        $this->category_participant = new ArrayCollection();
        $this->criteria = new ArrayCollection();
        $this->contestsOrganizations = new ArrayCollection();
        $this->membersContests = new ArrayCollection();
        $this->membersContestsWin = new ArrayCollection();
        $this->files = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isEtat(): ?bool
    {
        return $this->state;
    }

    public function setEtat(bool $state): self
    {
        $this->state = $state;

        return $this;
    }

    public function getSpotlighted(): ?bool
    {
        return $this->isSpotlighted;
    }

    public function setSpotlight(bool $isSpotlighted): self
    {
        $this->isSpotlighted = $isSpotlighted;

        return $this;
    }

    public function getNameContests(): ?string
    {
        return $this->name_contests;
    }

    public function setNameContests(string $name_contests): self
    {
        $this->name_contests = $name_contests;

        return $this;
    }

    public function getVisualContests(): ?string
    {
        return $this->visual_contests;
    }

    public function setVisualContests(string $visual_contests): self
    {
        $this->visual_contests = $visual_contests;

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

    public function getRules(): ?string
    {
        return $this->rules;
    }

    public function setRules(string $rules): self
    {
        $this->rules = $rules;

        return $this;
    }

    public function getPrices(): ?string
    {
        return $this->prices;
    }

    public function setDotations(string $prices): self
    {
        $this->prices = $prices;

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

    public function getDateStartSubmissions(): ?\DateTimeInterface
    {
        return $this->date_start_submissions;
    }

    public function setDateStartSubmissions(\DateTimeInterface $date_start_submissions): self
    {
        $this->date_start_submissions = $date_start_submissions;

        return $this;
    }

    public function getDateEndSubmissions(): ?\DateTimeInterface
    {
        return $this->date_end_submissions;
    }

    public function setDateEndSubmissions(\DateTimeInterface $date_end_submissions): self
    {
        $this->date_end_submissions = $date_end_submissions;

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

    public function getJuryvotesWeighting(): ?int
    {
        return $this->jury_votes_weighting;
    }

    public function setJuryvotesWeighting(int $jury_votes_weighting): self
    {
        $this->jury_votes_weighting = $jury_votes_weighting;

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

    public function getNbPrices(): ?int
    {
        return $this->nb_prices;
    }

    public function setNbPrices(int $nb_prices): self
    {
        $this->nb_prices = $nb_prices;

        return $this;
    }

    public function getCriteriaAgeMin(): ?int
    {
        return $this->criteria_age_min;
    }

    public function setCriteriaAgeMin(int $criteria_age_min): self
    {
        $this->criteria_age_min = $criteria_age_min;

        return $this;
    }

    public function getCriteriaAgeMax(): ?int
    {
        return $this->criteria_age_max;
    }

    public function setCriteriaAgeMax(int $criteria_age_max): self
    {
        $this->criteria_age_max = $criteria_age_max;

        return $this;
    }
    
    public function getOrganizationsPublish(): ?Organizations
    {
        return $this->organizations_publish;
    }

    public function setOrganizationsPublish(?Organizations $organizations_publish): self
    {
        $this->organizations_publish = $organizations_publish;

        return $this;
    }

    /**
     * @return Collection<int, Photo>
     */
    public function getPictures(): Collection
    {
        return $this->pictures;
    }

    public function addPictures(Pictures $pictures): self
    {
        if (!$this->pictures->contains($pictures)) {
            $this->pictures->add($pictures);
            $pictures->setContests($this);
        }

        return $this;
    }

    public function removePictures(Pictures $pictures): self
    {
        if ($this->pictures->removeElement($pictures)) {
            // set the owning side to null (unless already changed)
            if ($pictures->getContests() === $this) {
                $pictures->setContests(null);
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
            $theme->addContests($this);
        }

        return $this;
    }

    public function removeTheme(Theme $theme): self
    {
        if ($this->themes->removeElement($theme)) {
            $theme->removeContests($this);
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
            $categoryParticipant->addContests($this);
        }

        return $this;
    }

    public function removeCategoryParticipant(CategoryParticipant $categoryParticipant): self
    {
        if ($this->category_participant->removeElement($categoryParticipant)) {
            $categoryParticipant->removeContests($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Criteria>
     */
    public function getCriteria(): Collection
    {
        return $this->criteria;
    }

    public function addCriteria(Criteria $criteria): self
    {
        if (!$this->criteria->contains($criteria)) {
            $this->criteria->add($criteria);
            $criteria->addContests($this);
        }

        return $this;
    }

    public function removeCriteria(Criteria $criteria): self
    {
        if ($this->criteria->removeElement($criteria)) {
            $criteria->removeContests($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, ContestsOrganization>
     */
    public function getContestsOrganizations(): Collection
    {
        return $this->contestsOrganizations;
    }

    public function addContestsOrganizations(ContestsOrganizations $contestsOrganizations): self
    {
        if (!$this->contestsOrganizations->contains($contestsOrganizations)) {
            $this->contestsOrganizations->add($contestsOrganizations);
            $contestsOrganizations->setOrganizations($this);
        }

        return $this;
    }

    public function removeContestsOrganizations(ContestsOrganizations $contestsOrganizations): self
    {
        if ($this->contestsOrganizations->removeElement($contestsOrganizations)) {
            // set the owning side to null (unless already changed)
            if ($contestsOrganizations->getOrganizations() === $this) {
                $contestsOrganizations->setOrganizations(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MembersContests>
     */
    public function getMembersContests(): Collection
    {
        return $this->membersContests;
    }

    public function addMembersContests(MembersContests $membersContests): self
    {
        if (!$this->membersContests->contains($membersContests)) {
            $this->membersContests->add($membersContests);
            $membersContests->setContests($this);
        }

        return $this;
    }

    public function removeMembersContests(MembersContests $membersContests): self
    {
        if ($this->membersContests->removeElement($membersContests)) {
            // set the owning side to null (unless already changed)
            if ($membersContests->getContests() === $this) {
                $membersContests->setContests(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MembersContestsWin>
     */
    public function getMembersContestsWin(): Collection
    {
        return $this->membersContestsWin;
    }

    public function addMembersContestsWin(MembersContestsWin $membersContestsWin): self
    {
        if (!$this->membersContestsWin->contains($membersContestsWin)) {
            $this->membersContestsWin->add($membersContestsWin);
            $membersContestsWin->setMembers($this);
        }

        return $this;
    }

    public function removeMembersContestsWin(MembersContestsWin $membersContestsWin): self
    {
        if ($this->membersContestsWin->removeElement($membersContestsWin)) {
            // set the owning side to null (unless already changed)
            if ($membersContestsWin->getMembers() === $this) {
                $membersContestsWin->setMembers(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Files>
     */
    public function getFiles(): Collection
    {
        return $this->files;
    }

    public function addFile(Files $file): self
    {
        if (!$this->files->contains($file)) {
            $this->files->add($file);
            $file->setContests($this);
        }

        return $this;
    }

    public function removeFile(Files $file): self
    {
        if ($this->files->removeElement($file)) {
            // set the owning side to null (unless already changed)
            if ($file->getContests() === $this) {
                $file->setContests(null);
            }
        }

        return $this;
    }
}
